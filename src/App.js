import "./App.css";
import Card from "./card";
let data = [
  {
    plan: "FREE",
    currency: "$",
    value: 0,
    period: "month",
    offer: [
      { name: "Single User", isAccess: true },
      { name: "5 GB Storage", isAccess: true },
      { name: "Unlimited Public Projects", isAccess: true },
      { name: "Community Access", isAccess: true },
      { name: "Unlimited Private Projects", isAccess: false },
      { name: "Dedicated Phone Support", isAccess: false },
      { name: "Free Subdomain", isAccess: false },
      { name: "Monthly Status Reports", isAccess: false },
    ],
  },
  {
    plan: "PLUS",
    currency: "$",
    value: 9,
    period: "month",
    offer: [
      { name: "5 User", isAccess: true },
      { name: "50 GB Storage", isAccess: true },
      { name: "Unlimited Public Projects", isAccess: true },
      { name: "Community Access", isAccess: true },
      { name: "Unlimited Private Projects", isAccess: true },
      { name: "Dedicated Phone Support", isAccess: true },
      { name: "Free Subdomain", isAccess: true },
      { name: "Monthly Status Reports", isAccess: false },
    ],
  },
  {
    plan: "PRO",
    currency: "$",
    value: 49,
    period: "month",
    offer: [
      { name: "Unlimited User", isAccess: true },
      { name: "150 GB Storage", isAccess: true },
      { name: "Unlimited Public Projects", isAccess: true },
      { name: "Community Access", isAccess: true },
      { name: "Unlimited Private Projects", isAccess: true },
      { name: "Dedicated Phone Support", isAccess: true },
      { name: "Free Subdomain", isAccess: true },
      { name: "Monthly Status Reports", isAccess: true },
    ],
  },
];
function App() {
  return (
    <>
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {data.map((obj) => {
              return <Card place={obj}></Card>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
