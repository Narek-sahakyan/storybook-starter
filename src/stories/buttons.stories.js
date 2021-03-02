import Button from "../components/Button";

const obj = {
  title: "Buttons",
  component: Button,
};

export default obj;

export const Small = () => (
  <div>
    <Button size="small" color="primary" variant="contained">
      Small
    </Button>
    <Button size="small" color="primary" variant="outlined">
      Small
    </Button>
  </div>
);
export const Medium = () => (
  <div>
    <Button size="medium" color="primary" variant="contained">
      Medium
    </Button>
    <Button size="medium" color="primary" variant="outlined">
      Medium
    </Button>
  </div>
);
export const Large = () => (
  <div>
    <Button size="large" color="primary" variant="contained">
      large
    </Button>
    <Button size="large" color="primary" variant="outlined">
      large
    </Button>
  </div>
);
