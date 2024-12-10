import { useEffect, useRef } from 'react';

interface IProgressCircleProps {
  total: number;
  completed: number;
}

const ProgressCircle: React.FC<IProgressCircleProps> = ({
  total,
  completed,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const radius = 70;
  const lineWidth = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const canvasX = canvas.width / 2;
    const canvasY = canvas.height / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(canvasX, canvasY, radius, 0, 2 * Math.PI);
    context.lineWidth = lineWidth;
    context.strokeStyle = '#e6e6e6';
    context.stroke();

    const from = -Math.PI / 2;
    const to = from + (completed / total) * 2 * Math.PI;

    context.beginPath();
    context.arc(canvasX, canvasY, radius, from, to);
    context.lineWidth = lineWidth;
    context.strokeStyle = '#17a2b8';
    context.stroke();

    context.font = '16px Montserrat';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(
      `${Math.ceil((completed / total) * 100)}%`,
      canvasX,
      canvasY
    );
  }, [completed, total]);

  return (
    <div className="flex justify-center">
      <canvas ref={canvasRef} width={2.5 * radius} height={2.5 * radius} />
    </div>
  );
};
export default ProgressCircle;
