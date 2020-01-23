import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 450px;
  margin: 30px auto;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
`

export const CircularComponent = styled.div`   
  width: 50px;
  height: 50px;
  border-radius: 64px;
  border: 2px solid orange;
  background-color:${props => (props.color === 'yellow' ? 'yellow' : 'red')}
  padding: 20px;
  margin: 10px;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  justify-content: space-evenly;
`
