
import Main from "../Main/Main";
import OurProcess from "../Modules/stacking-cards";
import WaveformSliderDemoPage from "../WaveForm";


export default function HomeComponent() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <Main />
   <OurProcess />
   <WaveformSliderDemoPage />
    </div>
  );
}
