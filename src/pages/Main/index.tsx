
import Title from '../../components/Title/index';
import Timeline from './Timeline';
import { RecoilRoot } from 'recoil';


export default function Principal() {
  return (
    <RecoilRoot>
      <main className='main'>

        <header>
          <Title />
        </header>

        <section>

          <Timeline />
        </section>

      </main>

    </RecoilRoot>
  );
}