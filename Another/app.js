const App = () => {
  const iframePart = () => {
    return {
      __html:
        '<iframe src="https://solved.ac/profile/koosaga/history" width="100%" height="3500px" />',
    }
  }
  return (
    <>
      <h1>htes</h1>
      <div
        style={{
          width: '100%',
          height: '100',
        }}
        dangerouslySetInnerHTML={iframePart()}
      />
    </>
  )
}

export default App