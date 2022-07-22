import React from 'react';
import {Flex} from "@chakra-ui/react"
import Card from './Card'
import NoData from './NoData';

const ListaCasas = (props) => {
    const { data } = props
    return (
    <Flex flexWrap={"wrap"} justifyContent={"center"} >
              {/* <Button colorScheme='blue' onClick={toggleShow}>Completado</Button>
      {show === true && (
      <Spinner color='blue.500' size='xl' thickness="4px" speed="1s"/>        
      )} */}

      {data.map((casa, iguana) => {
        return <Card key={iguana} info={casa}/>
      })}
      {data.length === 0 && <NoData/>}
    </Flex>
  )
}

export default ListaCasas
