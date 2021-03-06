import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { responsiveHelper as media } from 'Helpers'

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
  font-size: 12px;
  align-items: center;

  ${media.phone`
    flex-direction: column;
  `};
`

export const Logo = styled.img`
  position: absolute;
  left: -24px;
  width: 36px;
  height: 36px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  background-color: white;
  border: 3px solid #fff;

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
  font-size: 1.25rem;
  margin: 0.5rem 0;
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
