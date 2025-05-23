import './App.css'
import '@mantine/core/styles.css';

import { AppShell, Flex, Burger, Button} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import githubLogo from './assets/github.svg';
import linkedinLogo from './assets/linkedin.svg';
import substackLogo from './assets/substack.svg';
import myselfPic from './assets/myself.jpg';

function App() {
    
    const [opened, {toggle}] = useDisclosure();

    return (
            <AppShell
                header={{ height: 60 }}
                navbar={{ width: 300, breakpoint: 'sm', collapsed: {mobile: !opened} }}
                padding='md'
            >
                <AppShell.Header>
                    <Flex justify='space-between' align='center' style={{ padding: '10px 20px' }}>
                        <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm'/>
                        <div>Quirky Mantine Tutorials</div>
                        <Button size='sm' variant='link'><img src={githubLogo} alt="" /></Button>
                    </Flex>
                </AppShell.Header>
               <AppShell.Main>
                </AppShell.Main>

                <AppShell.Footer>
                    Feito por Matheus Felipe
                </AppShell.Footer>
            </AppShell>
        
    )
}
export default App
