import { Button as MButton } from '@material-ui/core';

export default function Button(props) {
    console.log(props);
    return <MButton {...props} />;
}
