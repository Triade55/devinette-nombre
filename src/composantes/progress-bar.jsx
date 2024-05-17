import clsx from "clsx";

export const ProgressBar = ({tentative}) => {
    
  return (
    <div className={clsx(tentative<=3 ? 'text-green-500':'text-red-500' ,'text-xl')   }>
        {tentative}
    </div>
  );
};
