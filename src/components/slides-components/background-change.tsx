import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setThemeColor } from '../../redux/slides/slice';
import colors from '../../styles/colors';

interface BackgroundChangeProps {
  color: string;
}

const { white } = colors;

const BackgroundChange: React.FC<BackgroundChangeProps> = ({
  color = white,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setThemeColor(color));
  }, [dispatch, color]);

  return null;
};

export default BackgroundChange;
