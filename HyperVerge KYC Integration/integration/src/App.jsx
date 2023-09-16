import './App.css'

function App() {
  const starOnboarding = ()=> {
    const accessToken = "Bearer Token"
    const hyperKycConfig = new window.HyperKycConfig(
        accessToken,
        "workflow",
        "userId"
    );
    window.HyperKYCModule.launch(hyperKycConfig, handler);
}
const handler = (HyperKycResult) => {
    if (HyperKycResult.Cancelled) {
      // user cancelled
        alert(HyperKycResult.Cancelled);
    } else if (HyperKycResult.Failure) {
      // failure
        alert(HyperKycResult.Failure);
    } else if (HyperKycResult.Success) {
      // success
        alert(HyperKycResult.Success);
    }
}
  return (
    <>
      <div>
        <div>This is KYC integration Process</div>
        <div>
          <button onClick={starOnboarding}>Start</button>
        </div>
      </div>
    </>
  )
}

export default App
