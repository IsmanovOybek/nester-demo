import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Box, Container, Stack } from "@mui/material";

const PropertyDetail = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>Property Detail Mobile</Stack>;
  } else {
    return (
      <>
        <Container>Property Detail</Container>
      </>
    );
  }
};

export default withLayoutBasic(PropertyDetail);
