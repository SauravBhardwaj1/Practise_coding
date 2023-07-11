function MyComponent() {
    const { width, height } = useWindowDimensions();
  
    return (
      <div>
        Window width: {width}px
        <br />
        Window height: {height}px
      </div>
    );
  }
  