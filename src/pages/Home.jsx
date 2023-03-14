const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        💁Welcome!{'   '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>{' '}
        <div>Just press Log in in the bottom bar</div>
        to add or manage your contact list.{' '}
      </h1>
    </div>
  );
}
