import styled from 'styled-components'
import { Link } from 'react-router-dom'
import media from '../../utils/responsive'

export const JobItemNode = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  cursor: default;
  border-bottom: solid 1px ${({ theme }) => theme.colors.divider};
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`

export const New = styled.abbr`
  padding: 0.2rem 0.4rem;
  font-size: 0.6rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  margin-right: 0.5rem;

  ${media.tablet`
    display: none;
  `};
`

export const Header = styled.div`
  text-transform: uppercase;
  display: flex;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
  align-items: center;

  ${media.phone`
    flex-direction: column;
  `};
`

export const Logo = styled.img`
  position: absolute;
  left: -1rem;
  width: 1.8rem;
  height: 1.8rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  background-color: white;

  ${media.phone`
    position: relative;
    margin-bottom: 1rem;
    left: auto;
  `};
`

export const Location = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`

export const PublishedDate = styled.span`
  flex-grow: 1;
  text-align: right;
  font-size: 0.6rem;
`

export const Position = styled(Link)`
  font-size: 1rem;
  margin: 1rem 0 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;

  ${media.phone`
    display: block;
    text-align: center;
  `};
`

export const About = styled.p`
  height: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
`
