import Button from '../components/Button';

const obj = {
    title: 'Buttons',
    component: Button,
};

export default obj;

export const Small = () => (
    <Button size='small' color='primary' variant='contained'>
        SMALL
    </Button>
);
export const Medium = () => (
    <Button size='medium' color='primary' variant='contained'>
        MEDIUM
    </Button>
);
export const Large = () => (
    <Button size='large' color='primary' variant='contained'>
        LARGE
    </Button>
);
