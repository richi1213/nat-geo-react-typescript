const colorVariables = [
  '--background',
  '--foreground',
  '--card',
  '--card-foreground',
  '--popover',
  '--popover-foreground',
  '--primary',
  '--primary-foreground',
  '--secondary',
  '--secondary-foreground',
  '--muted',
  '--muted-foreground',
  '--accent',
  '--accent-foreground',
  '--destructive',
  '--destructive-foreground',
  '--border',
  '--input',
  '--ring',
  '--chart-1',
  '--chart-2',
  '--chart-3',
  '--chart-4',
  '--chart-5',
];

export const ColorPalette: React.FC = () => {
  return (
    <div className='grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4'>
      {colorVariables.map((variable) => {
        const color = getComputedStyle(document.documentElement)
          .getPropertyValue(variable)
          .trim();
        return (
          <div
            key={variable}
            className='flex flex-col items-center justify-center rounded border p-4 shadow'
            style={{
              backgroundColor: `hsl(${color})`,
              color: variable.includes('foreground')
                ? 'hsl(var(--background))'
                : 'hsl(var(--foreground))',
            }}
          >
            <div
              className='mb-2 h-16 w-16 rounded'
              style={{
                backgroundColor: `hsl(${color})`,
                border: '1px solid hsl(var(--border))',
              }}
            ></div>
            <p className='text-sm font-medium'>{variable}</p>
          </div>
        );
      })}
    </div>
  );
};
