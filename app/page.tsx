import MainTextArea from '@/components/MainTextArea';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      안녕하세요
      <MainTextArea />
    </main>
  );
}
