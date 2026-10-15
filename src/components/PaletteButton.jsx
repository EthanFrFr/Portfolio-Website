import '../index.css'

function PaletteButton() {
    const circle = {
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        backgroundColor: '#000000'
    }

    return (
        <div style={circle}></div>
    );
}

export default PaletteButton;