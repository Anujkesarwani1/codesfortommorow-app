import { Popover, Stack } from '@mui/material'
import MyAvatar from 'components/atoms/Avatar'
import MuiTypography from 'components/atoms/Typography'
import AVATAR from '../../../../public/assets/images/Avatar.svg'
import theme from 'themes'

export interface ListItemProps {
  title: string
  subtitle: string
  datetime: string
}

const ListItem = (props: ListItemProps) => {
  return (
    <Popover open={true} sx={{ height: '9rem', borderRadius: '5rem' }}>
      <Stack direction="row" spacing={2} padding="1rem" width="35rem">
        <MyAvatar
          src={AVATAR}
          alt={'Avatar'}
          sx={{ width: '3.5rem', height: '3.5rem' }}
        />
        <Stack>
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
        </Stack>
      </Stack>
    </Popover>
  )
}

export default ListItem
