import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { Moon, Sun } from '@/components/icons'

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(Moon, Sun)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="solid"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon width={20} />}
      {...props}
    />
  )
}
