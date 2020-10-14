import styled from 'styled-components';

export const SCREEN_WIDTH = typeof window !== 'undefined' ? window.screen.width : 1920;
export const SCREEN_HEIGHT = typeof window !== 'undefined' ? window.screen.height : 1080;
export const AIRBNB_PINK = '#ff385c';
export const AIRBNB_GRAY = '#ebebeb';
export const AIRBNB_DARKGRAY = 'rgba(176, 176, 176, 1)';
export const AIRBNB_GREEN = '#008489';

export const Container : any = styled.div`
    width: ${({ w } : any) => w ?? `${SCREEN_WIDTH}px`};
    height: ${({ h } : any) => h ?? `${SCREEN_HEIGHT}px`};
    border: ${({ border = 0 } : any) => `${border ?? 0}px solid black`};
    border-top-width: ${({ border = 0, btw } : any) => btw ?? border}px;
    border-bottom-width: ${({ border = 0, bbw } : any) => bbw ?? border}px;
    border-left-width: ${({ border = 0, blw } : any) => blw ?? border}px;
    border-right-width: ${({ border = 0, brw } : any) => brw ?? border}px;
    border-color: ${({ boc } : any) => boc ?? 'black'};
    display: ${({ dp } : any) => dp ?? 'flex'};
    justify-content: ${({ jc } : any) => jc ?? 'null'};
    align-items: ${({ ai } : any) => ai ?? 'null'};
    border-radius: ${({ br } : any) => br ?? 0}px;
    border-top-left-radius: ${({ br, btlr } : any) => br ?? (btlr ?? 0)}px;
    border-top-right-radius: ${({ br, btrr } : any) => br ?? (btrr ?? 0)}px;
    border-bottom-left-radius: ${({ br, bblr } : any) => br ?? (bblr ?? 0)}px;
    border-bottom-right-radius: ${({ br, bbrr } : any) => br ?? (bbrr ?? 0)}px;
    padding: ${({ pd } : any) => pd ?? '0px'};
    padding-right: ${({ pr, pd } : any) => pr ?? (pd ?? '0px')};
    padding-left: ${({ pl, pd } : any) => pl ?? (pd ?? '0px')};
    padding-top: ${({ pt, pd } : any) => pt ?? (pd ?? '0px')};
    padding-bottom: ${({ pb, pd } : any) => pb ?? (pd ?? '0px')};
    flex-direction: ${({ fd } : any) => fd ?? 'column'};
    background-color: ${({ bc } : any) => bc ?? 'null'};
    opacity: ${({ opacity } : any) => opacity ?? 1};
    position: ${({ position } : any) => position ?? 'null'};
    z-index: ${({ z } : any) => z ?? 0};
    margin-top: ${({ mt } : any) => mt ?? '0px'};
    margin-left: ${({ ml } : any) => ml ?? '0px'};
    margin-right: ${({ mr } : any) => mr ?? '0px'};
    margin-bottom: ${({ mb } : any) => mb ?? '0px'};
`;
export const SpanContainer : any = styled.span`
    font-size: ${({ fs }: any) => fs ?? 10}px;
    color: ${({ color }: any) => color ?? 'black'};
    font-weight: ${({ fw }: any) => fw ?? 'normal'};
`;
