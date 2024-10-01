type Props = {
  className?: string;
  message: string;
};

function Caption({ className, message }: Props) {
  return <caption className={className}>{message}</caption>;
}

export default Caption;
