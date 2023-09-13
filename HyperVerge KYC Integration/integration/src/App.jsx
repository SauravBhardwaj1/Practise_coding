import './App.css'

function App() {
  const starOnboarding = ()=> {
    const accessToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjR1eTQ1OSIsImhhc2giOiJiNDEyODY5NWY4MjA5Mjk5NGEzNDk2YTc3ZjcyN2U0NzFmYzcwNDI0NjNlMWRmMzRjZmM5MTkxYjk0MDdjNTQ1IiwiaWF0IjoxNjkyMjU4MTg0LCJleHAiOjE2OTIyNTg0ODQsImp0aSI6ImEzMzhlMGNiLTQ5YTQtNDg1Ni1hNmU3LWY4NjAyMGEzYjc5YSJ9.yfJE2WRwz0GoA_-SyAN_CIMrL0TGC3txY4adf8geoFoitj3gAtEJ5IjqacV4uUI2vwz7gf8xFBrAuT6NfzsQY0eyGANEM6eFYBEOE01Sy30ggKruaAyLa3zBRygSOo4YR7Zj6nNlUGzgaNhYUaz_PadX8SzDNmBYmuWMNDrJj0I"
    const hyperKycConfig = new window.HyperKycConfig(
        accessToken,
        "workflow_ziBzWYb",
        "1234"
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
