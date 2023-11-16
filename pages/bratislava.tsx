export default function Red() {
  return <></>
}

export function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  }
}
