import { Popover, Stack } from '@mui/material'
import MuiTypography from 'components/atoms/Typography'
import IMAGE from '../../../../public/assets/images/images1.svg'
import theme from 'themes'
import Image from 'components/atoms/Image'
import Icons from 'components/atoms/Icons'
import CANCEL from '../../../../public/assets/images/cancel.svg'

export interface CardItemProps {
  title: string
  subtitle: string
  datetime: string
}

const CardItem = (props: CardItemProps) => {
  return (
    <Popover
      open={true}
      sx={{ height: '25rem', borderRadius: '5rem', width: '20rem' }}
    >
      <Stack marginLeft="16rem" marginTop='5px'>
        <Icons src={CANCEL} alt={'cancel'} width="20px" height="20px"></Icons>
      </Stack>
      <Stack direction="column" spacing={1} padding="1rem">
        <MuiTypography
          children={props.title}
          color={`${theme.palette.Text.highEmphasis}`}
          fontWeight="bold"
          variant="body2"
        />
        <MuiTypography
          children={props.subtitle}
          color={`${theme.palette.Text.highEmphasis}`}
          variant="body2"
        />
        <MuiTypography
          children={props.datetime}
          color={`${theme.palette.Text.lowEmphasis}`}
          variant="subtitle1"
          fontWeight="bold"
          marginTop="3px"
          fontSize="13px"
        />
        <Image src={IMAGE} alt="Image" width="250px" height="150px" />
      </Stack>
    </Popover>
  )
}

export default CardItem
