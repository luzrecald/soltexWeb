import CustomizationIntro from "../components/CustomizationIntro/CustomizationIntro";
import CustomizationSteps from "../components/CustomizationSteps/CustomizationSteps";

export default function Customization() {
  return (
    <main className="page">
      <CustomizationIntro />
      <CustomizationSteps />
    </main>
  );
}