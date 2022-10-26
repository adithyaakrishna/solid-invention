/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import './messageNode.min.css';
import MessageNodeCard from './MessageNodeCard';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MessageNode= () =>{
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
        <div className='message-node'>
            <Handle type="target" position={Position.Right} />
            <div>
                <MessageNodeCard />
            </div>
            <Handle type="source" position={Position.Left} id="a" />
        </div>
    </>
  );
}


