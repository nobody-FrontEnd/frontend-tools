import { Icon } from '@iconify/react';

function FNIcon(props: { name: string }) {
    return (
        <>
            <Icon
                icon={props.name}
                fontSize={18}
                style={{
                    marginRight: '16px',
                    display: 'inline-block',
                    verticalAlign: ' -4px',
                }}
            />
        </>
    );
}
export default FNIcon;
