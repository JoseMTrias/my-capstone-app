import styled from "styled-components"

export const Dropdown = styled.ul `

  /* main UL component called: "Menu" */
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: none;

  /* main LI */
  & > li {
    float: left;

    & > a {
      display: inline-block;
      color: white;
      text-align: center;
      padding: 0.1px 6px;
      text-decoration: none;

      &:hover {
        background-color: none;
      }
    }
  }

  /* dropdown LI */
  & > .dropdown {
      display: inline-block;
      font-size: small;
      padding-bottom: 15px;


      & > .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        width: 0px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;

        & > a {
          color: white;
          padding: 3px 3px;
          text-decoration: none;
          display: block;
          text-align: left;
          /* background-color: #f4e158; */
          opacity: 95%;


          &:hover {
            background-color: none;
          }
        }
      }

      &:hover .dropdown-content {
        display: block
      }
    }
`
export default Dropdown