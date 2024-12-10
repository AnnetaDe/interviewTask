interface IProgressProps {
  total: number;
  completed: number;
}
const Progress: React.FC<IProgressProps> = ({ total, completed }) => {
  return (
    <div>
      <div className="flex relative bg-gray-500 h-7 rounded-full w-full overflow-hidden bg-gradient-to-r c">
        <div
          className="bg-teal h-7 rounded-full absolute"
          style={{
            width: `${(completed / total) * 100}%`,
            background: 'linear-gradient(90deg, #551299, #17a2b8)',
          }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
            {Math.ceil((completed / total) * 100)}%
          </span>
        </div>
        <span className="absolute inset-2 flex justify-end items-center text-white font-medium">
          {(total / total) * 100}%
        </span>
      </div>
      <span className="m-2">
        {completed}/{total}
      </span>
    </div>
  );
};

export default Progress;
