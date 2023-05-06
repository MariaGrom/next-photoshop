import { Button, HTag } from './components';
import styles from './page.module.css'


export default function Home(): JSX.Element {
  return (
    <>
      <HTag tag='h2'>текст</HTag>
      <Button appearance='primary' >Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
    </>
  );
}
