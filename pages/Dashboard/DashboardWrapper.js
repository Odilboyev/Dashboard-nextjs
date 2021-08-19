import styled from "styled-components";

const DashboardWrapper = styled.div`
    
    display: flex;
    .sidebar{
        overflow-x: hidden;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.80),  rgba(0, 0, 0, 0.40)), url('https://azouaoui-med.github.io/react-pro-sidebar/static/media/bg1.74aaeeb9.jpg');
        background-size: cover;
        background-position: top;
        flex-shrink: 0;
        overflow: hidden;
        /* background-image: linear-gradient(to right top, #051937, #10173a, #1c133b, #280e3a, #330537); */
        transition: 0.3s;
        height: 100vh;
        position: sticky;
        top: 0;
        padding: 20px;

        &.show{
            width: 20%;
        }
        &.hide{
            width: 5%;
            padding: 10px;

            .MuiButtonBase-root{
                border-radius: 50%;
                
            }

            .icon{
                width: 100% !important;
                margin: 5px 0 !important;
            }

            .dash-title{
                width: 0 !important;
                display: none;
            }
        }

        .side-title{
            padding: 10px; 
            text-transform: uppercase; 
            font-weight: bold; 
            color:#fff;
            font-size: 20px; 
            letter-spacing: 1px; 
            overflow: hidden; 
            text-overflow: ellipsis; 
            white-space: nowrap;
        }
        nav{
            li{
                a{
                    .MuiButtonBase-root{
                        padding: 10px ;
                        border-radius: 6px;
                        background-color: rgba(255, 255, 255, 0.15)  !important;
                        color: white !important;
                        margin: 20px 0 ;
                        transition: all 0.3s;
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3) ;
                        &:hover{
                            background-color: rgba(255, 255, 255, 0.20)  !important;
                        }

                        display: flex;
                        .icon{
                            flex: 1;
                            /* width: 20%; */
                        }
                        .dash-title{
                            width: 80%;
                        }
                    }
                  
                    &.active{
                        .MuiButtonBase-root{
                            background-color:rgba(255, 255, 255, 0.80)  !important;
                            color: #202020  !important;
                        }
                    }
                }
            }
        }
    }
    .rightside{
        flex: 1;
        /* flex: 1 1 0%; */
        /* overflow-x: hidden; */
        position: relative;
        header{
            padding: 20px;
            position: sticky;
            top: 0;
            background-color: white;
            z-index: 1000;
            .logo{
                height: 40px;
                margin-right: 20px;
            }
        }
        .content{
            padding: 20px;
        }
    }
`;

export default DashboardWrapper;