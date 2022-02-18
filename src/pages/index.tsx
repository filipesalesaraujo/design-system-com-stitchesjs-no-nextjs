import { styled } from "@/styles";

const Flex = styled(`div`, {
  display: `flex`,
  alignItems: `center`,
});

const Button = styled(`button`, {
  border: 0,
  appearance: `none`,
  cursor: `pointer`,
  transition: `background 0.2s ease-in-out`,
  fontWeight: `bold`,

  $$shadowColor: ``,
  variants: {
    color: {
      primary: {
        backgroundColor: `$primary`,
        color: `#fff`,
      },
      shape: {
        backgroundColor: `$shape`,
        color: `#fff`,
      },
    },
    size: {
      small: {
        padding: `$16 $32`,
      },
      full: {
        padding: `$16 $32`,
        flex: `1`,
      },
    },
    radius: {
      default: {
        borderRadius: `$default`,
      },
      full: {
        borderRadius: `$full`,
      },
    },
    shadow: {
      true: {
        boxShadow: `0 0 8px $$shadowColor`,
      },
    },
  },
  compoundVariants: [
    {
      color: `primary`,
      shadow: true,
      css: {
        $$shadowColor: `$colors$primary`,
      },
    },
    {
      color: `shape`,
      shadow: true,
      css: {
        $$shadowColor: `$colors$shape`,
      },
    },
  ],

  defaultVariants: {
    color: `primary`,
    size: `small`,
    radius: `default`,
    shadow: `true`,
  },
});

export default function Home() {
  return (
    <Flex css={{ gap: "$16", padding: `$16` }}>
      <Button type="button">Experts Club</Button>
      <Button radius="full" size="full" color="shape" type="button">
        Experts Club
      </Button>
    </Flex>
  );
}
