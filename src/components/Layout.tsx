interface Props {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className }: Props) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
