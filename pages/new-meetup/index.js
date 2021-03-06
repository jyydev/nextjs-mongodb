import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    router.push('/');
  }
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta title="description" content="Add your own meetup!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
