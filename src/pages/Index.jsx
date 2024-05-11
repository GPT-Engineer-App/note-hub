import { Box, Button, Container, Flex, IconButton, Input, Text, VStack, useColorModeValue, SimpleGrid, Textarea, Heading } from "@chakra-ui/react";
import { FaPlus, FaArrowLeft, FaTrash, FaSearch, FaEdit } from "react-icons/fa";
import { useState } from "react";

// Simulated data and functions to mimic API interactions
let notesData = [
  { id: 1, title: "Shopping List", content: "Eggs, Milk, Bread, Butter" },
  { id: 2, title: "ToDo", content: "React project, Gym, Read a book" },
  { id: 3, title: "Meeting Notes", content: "Discuss project milestones, Budget review" },
];

const fetchNotes = () => notesData;
const saveNote = (note) => {
  const index = notesData.findIndex((n) => n.id === note.id);
  if (index > -1) {
    notesData[index] = note;
  } else {
    note.id = notesData.length + 1;
    notesData.push(note);
  }
};
const deleteNote = (id) => {
  notesData = notesData.filter((note) => note.id !== id);
};

const Header = ({ onBack, title, onNewNote, onDelete }) => (
  <Flex width="full" bg={useColorModeValue("blue.500", "blue.700")} p={4} color="white" justifyContent="space-between" alignItems="center">
    {onBack ? <IconButton icon={<FaArrowLeft />} onClick={onBack} aria-label="Back" /> : <Text fontSize="lg">KeepClone</Text>}
    <Text fontSize="lg">{title}</Text>
    {onDelete ? <IconButton icon={<FaTrash />} onClick={onDelete} aria-label="Delete" /> : onNewNote && <IconButton icon={<FaPlus />} onClick={onNewNote} aria-label="New Note" />}
  </Flex>
);

const SearchBar = ({ onSearch }) => (
  <Flex p={4}>
    <Input placeholder="Search notes" onChange={(e) => onSearch(e.target.value)} width="full" />
  </Flex>
);

const NoteList = ({ notes, onSelect }) => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} p={4}>
    {notes.map((note) => (
      <Box key={note.id} p={4} shadow="md" borderWidth="1px" onClick={() => onSelect(note)} cursor="pointer">
        <Heading size="md">{note.title}</Heading>
        <Text mt={2}>{note.content.substring(0, 100)}...</Text>
      </Box>
    ))}
  </SimpleGrid>
);

const NoteDetail = ({ note, onChange, onSave, onBack }) => (
  <VStack spacing={4} p={4}>
    <Input value={note.title} onChange={(e) => onChange({ ...note, title: e.target.value })} placeholder="Title" />
    <Textarea value={note.content} onChange={(e) => onChange({ ...note, content: e.target.value })} placeholder="Content" height="200px" />
    <Button onClick={onSave}>Save</Button>
    <Button onClick={onBack}>Back</Button>
  </VStack>
);

const Index = () => {
  const [notes, setNotes] = useState(fetchNotes());
  const [currentNote, setCurrentNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    setNotes(fetchNotes().filter((note) => note.title.toLowerCase().includes(query.toLowerCase()) || note.content.toLowerCase().includes(query.toLowerCase())));
  };

  const handleSelectNote = (note) => {
    setCurrentNote({ ...note });
  };

  const handleSaveNote = () => {
    saveNote(currentNote);
    setNotes(fetchNotes());
    setCurrentNote(null);
  };

  const handleDeleteNote = () => {
    deleteNote(currentNote.id);
    setNotes(fetchNotes());
    setCurrentNote(null);
  };

  const handleNewNote = () => {
    setCurrentNote({ title: "", content: "" });
  };

  const handleBack = () => {
    setCurrentNote(null);
  };

  return (
    <Container maxW="container.xl">
      <Header title={currentNote ? currentNote.title : "Home"} onBack={currentNote ? handleBack : null} onNewNote={!currentNote ? handleNewNote : null} onDelete={currentNote ? handleDeleteNote : null} />
      {currentNote ? (
        <NoteDetail note={currentNote} onChange={setCurrentNote} onSave={handleSaveNote} onBack={handleBack} />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <NoteList notes={notes} onSelect={handleSelectNote} />
        </>
      )}
    </Container>
  );
};

export default Index;
