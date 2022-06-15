export const VerticalGridIcon = (props: any) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle cx={9} cy={5} r={1} />
    <circle cx={9} cy={12} r={1} />
    <circle cx={9} cy={19} r={1} />
    <circle cx={15} cy={5} r={1} />
    <circle cx={15} cy={12} r={1} />
    <circle cx={15} cy={19} r={1} />
  </svg>
);
