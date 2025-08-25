function ResizeLine() {
  return (
    <div
      id='resize-line'
      style={{
        position: 'absolute',
        top: 0,
        width: '1px',
        height: '100%',
        background: '#dbeafe',
        display: 'none',
        zIndex: 50,
      }}
    />
  );
}

export default ResizeLine;
