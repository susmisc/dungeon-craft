interface Props {
  children: React.ReactNode;
}

const Core = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Core;
