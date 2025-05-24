import './App.css'
import '@mantine/core/styles.css';

import { AppShell, Flex, Burger, ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun } from '@tabler/icons-react';

function App() {
    
    const [opened, {toggle}] = useDisclosure();
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');

    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === 'dark' ? 'light': 'dark');
    }

    return (
        <AppShell
            header={{ height: 60 }}
            padding='md'
        >
            <AppShell.Header>
                <div style={{ margin: '0 auto', padding: '0 20px', height: '100%' }}>
                    <Flex justify='space-between' align='center' style={{ height: '100%'}}>
                        <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm'/>
                        <a href="">Matheus</a>
                        <Flex gap='lg'>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Experience</a>
                            <a href="">Contacts</a>
                        </Flex>
                        <ActionIcon variant='subtle' onClick={toggleColorScheme}>
                            <IconSun></IconSun>
                        </ActionIcon>
                   </Flex>
                </div>
           </AppShell.Header>
           <AppShell.Main>
            </AppShell.Main>

            <AppShell.Footer>
                Made by Matheus Felipe
            </AppShell.Footer>
        </AppShell>
    )
}
export default App
