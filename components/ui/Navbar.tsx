import { useTheme, Text, Spacer, Image, Link } from "@nextui-org/react"
import NextLink from 'next/link';
export const Navbar = () => {

    const {theme} = useTheme();
  return (
    <div style={{
        display: "flex",
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray50.value
    }}>
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="icono"
            width={70}
            height={70}
        />
        <NextLink href="/" passHref>
          <Link>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>
          </Link>
        </NextLink>
        

        <Spacer css={{flex: 1}} />
        
        <NextLink href="/favorites" passHref>
          <Link>
            <Text color="white" css={{margin:'0px 30px'}} h3>Favoritos</Text>
          </Link>
        </NextLink>

    </div>
  )
}
