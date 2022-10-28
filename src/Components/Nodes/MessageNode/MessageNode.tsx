/* eslint-disable @typescript-eslint/no-explicit-any */
import { Handle, Position } from 'reactflow';
import './messageNode.min.css';
import Whatsapp from '../../../Assets/Icons/WA.png';
import Chat from '../../../Assets/Icons/Chat.png';
import { Typography } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MessageNode = () =>{

  return (
    <div className='message-node'>
      <div className='message-node-header'>
            <Handle type="target" position={Position.Right} />
            <div className='node-header'>
              <img src={Chat} alt="Whatsapp"  className="chat-image" />
              <span>
                Send Message
              </span>
              <span className="white-background">
                <img src={Whatsapp} alt="Whatsapp"  className="whatsapp-image" />
              </span>
            </div>
            <Handle type="source" position={Position.Left} id="a" />
            
        </div>
        <div className='message-text'>
          <Typography variant="subtitle2" gutterBottom>
            Dummy Message
          </Typography>
        </div>
    </div>
  );
}


