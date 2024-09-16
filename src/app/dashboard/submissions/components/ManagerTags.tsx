"use client";

import React, { ReactNode, useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";

type Tag = {
  id: string;
  text: string;
  className: string;
};

export const ManagerTags: React.FC = () => {
  const [isTagged, setIsTagged] = useState<Tag[]>([]);

  const handleDelete = (index: number) => {
    setIsTagged(isTagged.filter((_, i) => i !== index));
  };

  const handleAddition = (tag: { id: string; text: string; className: string }) => {
    const newTag: Tag = {
      id: tag.id,
      text: tag.text,
      className: tag.className,
    };
    setIsTagged((prevTags) => {
      return [...prevTags, newTag];
    });
  };

  const onClearAll = () => {
    setIsTagged([]);
  };

  return (
    <div>
      <ReactTags tags={isTagged} handleDelete={handleDelete} handleAddition={handleAddition} editable clearAll onClearAll={onClearAll} maxTags={5} />
    </div>
  );
};
