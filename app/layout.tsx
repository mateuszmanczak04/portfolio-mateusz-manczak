import './globals.css';

type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='pl'>
      <head>
        <title>Mateusz Mańczak - Strony internetowe i aplikacje webowe</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
