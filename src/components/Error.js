import { MdError } from 'react-icons/md';

export function Error({ message = '' }) {
  return (
    <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
      <div className="flex justify-center text-red-600 top-1/2 my-0 mx-auto relative w-1/2">
        <MdError className=" w-8 h-8" />
        <span className="ml-2 self-center">{message}</span>
      </div>
    </div>
  );
}
