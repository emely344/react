import { Typography } from "@mui/material";

const TypographyComponent = () => {
  return (
    <>
      <Typography align="right" component="h6" variant="h4">
        one
      </Typography>
      <Typography align="center" fontWeight={700} component="p" variant="h5">
        one
      </Typography>
      <Typography fontWeight={500} component="button" variant="h5">
        one
      </Typography>
      <Typography
        align="left"
        fontWeight={400}
        variant="h5"
        color="primary.main"
      >
        primary.main
      </Typography>
      <Typography fontWeight={400} variant="h5" color="primary.light">
        primary.light
      </Typography>

      <Typography fontWeight={400} variant="h5" color="primary.dark">
        primary.dark
      </Typography>
      <Typography fontWeight={400} variant="h5" color="success.main">
        success.main
      </Typography>
      <Typography fontWeight={300} variant="h5" sx={{ color: "red" }}>
        one
      </Typography>
      <p>two</p>

      <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        delectus impedit ad minima numquam architecto illo repudiandae hic
        molestias nulla recusandae, modi aliquam alias odio repellendus aliquid
        possimus nihil omnis?
      </Typography>

      <Typography noWrap>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        iste quas sunt commodi explicabo dolor facere corporis nulla, nesciunt,
        reprehenderit dolore inventore optio deserunt ut possimus tenetur
        doloremque maiores nemo!
      </Typography>
    </>
  );
};

export default TypographyComponent;
