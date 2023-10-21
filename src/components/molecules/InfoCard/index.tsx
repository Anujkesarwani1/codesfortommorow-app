import { Grid, Popover, Stack, styled } from '@mui/material'
import MyAvatar from 'components/atoms/Avatar'
import AVATAR from '../../../../public/assets/images/Avatar.svg'
import MuiTypography from 'components/atoms/Typography'
import theme from 'themes'

export interface InfoCardProps {}

const InfoCard = (props: InfoCardProps) => {
  return (
    <Popover open={true} sx={{ height: '20rem' }}>
      <Stack direction="row" spacing={1} padding="0.5rem" width="12rem">
        <MyAvatar src={AVATAR} alt={'Avatar'} />
        <Stack>
          <MuiTypography
            children={'Hi Reader,'}
            color={`${theme.palette.Text.highEmphasis}`}
            fontWeight="bold"
            variant="body2"
          />
          <MuiTypography
            children={"Here's your News!"}
            color={`${theme.palette.Text.highEmphasis}`}
            variant="body2"
          />
        </Stack>
      </Stack>
    </Popover>
  )
}

export default InfoCard
