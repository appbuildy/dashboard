import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { QRCode } from 'react-qr-svg';
import { useBlockScroll } from '../../lib/useBlockScroll';
import iphonePreview from './iphone-preview.png';
import barPreview from './bar.svg';
import statusBarPreview from './status-bar.svg';
import logoMini from './logo-mini.svg';

interface IPlatform {
  match: {
    params: {
      id: string;
    };
  };
}

const Platform: React.FC<IPlatform> = ({ match: { params } }) => {
  const { id } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [projectId, setProjectId] = useState<string | null>();

  useBlockScroll();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setProjectId(urlParams.get('project_id'));
  }, []);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const cb = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', cb);

    return () => {
      window.removeEventListener('resize', cb);
    };
  });

  return (
    <PreviewWrapper>
      {projectId && (
        <>
          <PreviewCenter>
            <PreviewContainer>
              {/* for local testing purposes */}
              {/*<IframeStyled*/}
              {/*  src={`http://0.0.0.0:8989/?preview_mode=enabled&project_id=${projectId}&url=https://www.appbuildy.com`}*/}
              {/*  // @ts-ignore*/}
              {/*  onLoad={() => setIsLoading(false)}*/}
              {/*/>*/}
              <IframeStyled
                src={`https://www.appbuildy.com/projects/${id}?preview_mode=enabled&project_id=${projectId}`}
                // @ts-ignore
                onLoad={() => setIsLoading(false)}
              />
              <IphoneContainer src={iphonePreview} />
              <BarContainer src={barPreview} />
              <StatusBarContainer src={statusBarPreview} />
            </PreviewContainer>
          </PreviewCenter>
          <Badge target={'_blank'} href={'https:///www.appbuildy.com'}>
            <BadgeContainer>
              <BadgeLogo src={logoMini} />
              <BadgeTitle>
                Made without code <br />
                <BadgeAppBuildy>
                  via <BadgeAppBuildyBlue>App</BadgeAppBuildyBlue>Buildy
                </BadgeAppBuildy>
              </BadgeTitle>
            </BadgeContainer>
          </Badge>

          <QRWrapper>
            <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="M"
              style={{ width: 192, borderRadius: 6 }}
              value="https://build.appbuildy.com/preview/134/?project_id=weathered-glade-7406"
            />
            <QRTitle>Point your camera to QR code to install the app</QRTitle>
          </QRWrapper>
        </>
      )}
    </PreviewWrapper>
  );
};

export default Platform;

const PreviewWrapper = styled.div`
  background: #fff url(https://www.appbuildy.com/images/hero_bg.svg) repeat-x;
`;

const IframeStyled = styled.iframe`
  border: none;
  width: 375px;
  height: 812px;

  @media (max-width: 600px) {
    width: 100%;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100); 
`;

const PreviewContainer = styled.div`
  width: 450px;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const PreviewCenter = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const IphoneContainer = styled.img`
  position: absolute;
  pointer-events: none;
  top: -18px;
  left: -21px;
  width: 417px;
  height: 848px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const StatusBarContainer = styled.img`
  position: absolute;
  pointer-events: none;
  top: -3px;
  left: 2px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const BarContainer = styled.img`
  position: absolute;
  pointer-events: none;
  bottom: 13px;
  left: -80px;
  right: 0;
  margin: 0 auto;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Badge = styled.a`
  display: block;
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 2px;
  border: 10px transparent;
  border-radius: 11px;
  background-image: linear-gradient(white, white),
    linear-gradient(180deg, #37c0fb 0%, #007aff 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  margin: 12px 21px 11px 12px;
  line-height: 20px;
`;
const BadgeLogo = styled.img`
  margin-right: 10px;
`;
const BadgeTitle = styled.div`
  color: #262726;
  font-size: 15px;
  font-weight: 500;
`;

const BadgeAppBuildy = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const BadgeAppBuildyBlue = styled.span`
  color: #007aff;
  font-weight: 600;
`;

const QRWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const QRTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  width: 180px;
  text-align: center;
  opacity: 0.6;
`;
