interface Props {
  children: React.ReactNode;
  styles?: string;
}

const Container = ({ children, styles }: Props) => {
  return (
    <div className={`w-full max-w-5xl mx-auto px-4 ${styles}`}>{children}</div>
  );
};

export default Container;
