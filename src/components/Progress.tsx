interface ProgressProps {
  total: number;
  uncompleted: number;
}
const Progress: React.FC<ProgressProps> = ({ total, uncompleted }) => {
  return (
    <div className="flex relative bg-gray-800 h-7 rounded-full w-full overflow-hidden">
      <div
        className="bg-teal h-7 rounded-full absolute"
        style={{
          width: `${(uncompleted / total) * 100}%`,
        }}
      >
        <p className="absolute inset-0 flex items-center justify-center text-white font-medium">
          {uncompleted}
        </p>
      </div>
      <p className="absolute inset-0 flex justify-center items-center text-white font-medium">
        {total}
      </p>
    </div>
  );
};

export default Progress;
